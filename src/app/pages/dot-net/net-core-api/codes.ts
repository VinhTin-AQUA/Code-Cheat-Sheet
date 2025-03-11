export const codes = [
	{
		id: 'custom-loi-modelstate-gui-den-client-thanh-mang-chuoi',
		name: 'Custom lỗi ModelState gửi đến client thành mảng chuỗi',
        language: 'csharp',
		code: `    // định dạng lỗi gửi đến client
    builder.Services.Configure<ApiBehaviorOptions>(options =>
    {
        options.InvalidModelStateResponseFactory = (actionContext) =>
        {
            var errors = actionContext.ModelState
                .Where(x => x.Value!.Errors.Count > 0)
                .SelectMany(x => x.Value!.Errors)
                .Select(x => x.ErrorMessage).ToArray();

            var toReturn = new
            {
                Errors = errors
            };

            return new BadRequestObjectResult(toReturn);
        };
    });
        `,
	},
	{
		id: 'dang-nhap-gg-api',
		name: 'Đăng nhập GG API',
        language: 'csharp',
		linkToDrive: 'aaa',
	},
	{
		id: 'dich-vu-gui-mail-api',
		name: 'Dịch vụ gửi mail API',
        language: 'csharp',
		linkToDrive: 'aaa',
	},
    {
		id: 'enable-cors',
		name: 'Enable CORS',
        language: 'csharp',
		code: `    // enable cors
    builder.Services.AddCors(c =>
    {
        c.AddPolicy("AllowOrigin", option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
    });

    // enable cors
    app.UseCors(option => option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        `,
	},
    {
		id: 'jwt-service',
		name: 'JWT - Service',
        language: 'csharp',
		code: `    
/* Install packages */ 
Install-Package Microsoft.AspNetCore.Authentication.JwtBearer
Install-Package System.IdentityModel.Tokens.Jwt

/* Appsetting.json */ 
   "JWT": {
        "Key": "47FF531F8F41748EC2EE92C2C4BD5ushdf8sy4f5wfwef",
        "ExpiresInDays": 1,
        "Issuer": "https://localhost:7104",
        "ValidAudience": "https://localhost:7104",
        "UrlClient": "http://localhost:4200"
    }


/* Code */ 
    public class JwtService
    {
        private readonly IConfiguration configuration;
        private readonly UserManager<AppUser> userManager;
        private readonly SymmetricSecurityKey jwtKey;

        public JwtService(IConfiguration configuration, UserManager<AppUser> userManager)
        {
            this.configuration = configuration;
            this.userManager = userManager;

            // lấy key => chuyển sang mảng bytes => tiến hành mã hóa đối xứng
            jwtKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]!));
        }

        public async Task<string> CreateJWT(AppUser user)
        {
            var userClaims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id),
                new Claim(ClaimTypes.Email, user.Email!),
                new Claim(JwtRegisteredClaimNames.Sub,user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName!),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),

            };

            var userRoles = await userManager.GetRolesAsync(user);
            userClaims.AddRange(userRoles.Select(role => new Claim(ClaimTypes.Role, role)));

            // thông tin đăng nhập
            var creadentials = new SigningCredentials(jwtKey, SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(userClaims),
                Expires = DateTime.UtcNow.AddDays(int.Parse(configuration["JWT:ExpiresInDays"]!)),
                SigningCredentials = creadentials,
                Issuer = configuration["JWT:Issuer"],
                Audience = configuration["JWT:ValidAudience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var jwt = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(jwt);
        }
    }

/* Thêm dịch vụ Authentication và BearerJwt */ 
    builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    }).AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            // validate the issuer (who ever is issuing the JWT)
            ValidateIssuer = true,
            ValidateIssuerSigningKey = true, // validate token based on the key we have provided in appsetting.json

            // don't validate audience (angular side)
            ValidateAudience = false,

            //ValidAudience = builder.Configuration.GetSection("JWT:ValidAudience").Value,
            // the issuer which in here is the api project url
            ValidIssuer = builder.Configuration.GetSection("JWT:Issuer").Value,

            // the issuer signin key based on JWT:Key
            IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration.GetSection("JWT:Key").Value!))
        };
    });

/* thêm midlware */
    app.UseAuthentication();`,
	},
    {
		id: 'khac-phuc-spam-api-bi-trung-du-lieu',
		name: 'Khắc phục spam API bị trùng dữ liệu',
        language: 'csharp',
		linkToDrive: 'aaa',
	},
    {
		id: 'upload-file-api',
		name: 'Upload File API',
        language: 'csharp',
		linkToDrive: 'aaa',
	},
];
