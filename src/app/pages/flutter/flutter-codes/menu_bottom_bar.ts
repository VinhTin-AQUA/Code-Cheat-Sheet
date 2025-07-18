export const menuBottomBar = [
	{
		id: 'menu-bottom-bar',
		name: 'Menu BottomBar',
		codeBlocks: [
			{
				name: '',
				language: 'dart',
				code: `import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:password_management/core/router/routes.dart';

class MenuBottomBar extends StatelessWidget {
  const MenuBottomBar({super.key});

  @override
  Widget build(BuildContext context) {
    final List<MenuItemData> menuItems = [
      MenuItemData(icon: Icons.home, onPressed: () => {}),
      MenuItemData(
        icon: Icons.add,
        onPressed: () => Get.toNamed(TRoutes.addAccount),
      ),
      MenuItemData(
        icon: Icons.settings,
        onPressed: () => Get.toNamed(TRoutes.settings),
      ),
    ];

    return Material(
      color: Colors.transparent,
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
        decoration: BoxDecoration(
          color: Colors.black,
          borderRadius: BorderRadius.circular(24),
          boxShadow: [
            BoxShadow(
              color: Colors.black26,
              blurRadius: 12,
              offset: Offset(0, 4),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children:
              menuItems.map((item) {
                return Material(
                  color: Colors.transparent,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(24),
                    onTap: item.onPressed,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Icon(item.icon, color: Colors.white, size: 24),
                    ),
                  ),
                );
              }).toList(),
        ),
      ),
    );
  }
}

class MenuItemData {
  final IconData icon;
  final VoidCallback onPressed;

  MenuItemData({required this.icon, required this.onPressed});
}`,
			},
		],
	},
];
