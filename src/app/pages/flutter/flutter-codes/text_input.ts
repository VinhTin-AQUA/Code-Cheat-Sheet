export const textInput = [
	{
		id: 'textInput',
		name: 'text-input',
		codeBlocks: [
			{
				name: '',
				language: 'dart',
				code: `import 'package:flutter/material.dart';

class TextInput extends StatefulWidget {
  final ValueChanged<String> onChanged;
  final IconData? icon;
  final String hintText;
  final String? errorText;
  final String? value;
  final int maxLines;
  final String? labelText;

  const TextInput({
    super.key,
    required this.onChanged,
    this.icon,
    this.hintText = '',
    this.errorText,
    this.value,
    this.labelText,
    this.maxLines = 1,
  });

  @override
  State<TextInput> createState() => _TextInputState();
}

class _TextInputState extends State<TextInput> {
  late TextEditingController _controller;
  final FocusNode _focusNode = FocusNode();
  bool _isFocused = false;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: widget.value ?? '');

    _focusNode.addListener(() {
      setState(() {
        _isFocused = _focusNode.hasFocus;
      });
    });
  }

  @override
  void didUpdateWidget(covariant TextInput oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.value != oldWidget.value && widget.value != _controller.text) {
      _controller.text = widget.value ?? '';
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    _focusNode.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final bool hasError =
        widget.errorText != null && widget.errorText!.isNotEmpty;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (widget.labelText != null) // Thêm dòng này
          Padding(
            padding: const EdgeInsets.only(bottom: 6, left: 4),
            child: Text(
              widget.labelText!,
              style: const TextStyle(
                fontWeight: FontWeight.w700,
                fontSize: 14,
                color: Colors.black87,
                
              ),
            ),
          ),
        Container(
          decoration: BoxDecoration(
            color: Colors.grey[100],
            borderRadius: BorderRadius.circular(10),
            border: Border.all(
              color:
                  hasError
                      ? Colors.red
                      : (_isFocused ? Colors.black : Colors.transparent),
              width: 1.5,
            ),
            boxShadow: [
              if (_isFocused)
                BoxShadow(
                  color: Colors.black.withValues(alpha: 0.2),
                  blurRadius: 8,
                  offset: const Offset(0, 2),
                )
              else
                BoxShadow(
                  color: Colors.grey.shade400.withValues(alpha: 0.2),
                  blurRadius: 5,
                  offset: const Offset(0, 3),
                ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 12.0),
            child: Row(
              children: [
                if (widget.icon != null) Icon(widget.icon),
                if (widget.icon != null) const SizedBox(width: 8),
                Expanded(
                  child: TextField(
                    controller: _controller,
                    focusNode: _focusNode,
                    onChanged: widget.onChanged,
                    maxLines: widget.maxLines,
                    decoration: const InputDecoration(
                      border: InputBorder.none,
                      hintText: '',
                    ).copyWith(hintText: widget.hintText),
                  ),
                ),
              ],
            ),
          ),
        ),
        if (hasError)
          Padding(
            padding: const EdgeInsets.only(top: 6, left: 8),
            child: Text(
              widget.errorText!,
              style: TextStyle(color: Colors.red[700], fontSize: 13),
            ),
          ),
      ],
    );
  }
}
`,
			},
		],
	},
];
