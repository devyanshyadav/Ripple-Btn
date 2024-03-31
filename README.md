# React Ripple Button

## Overview

`react-ripple-btn` is a lightweight and customizable React component that provides a beautiful ripple effect on button clicks. It's designed to enhance the user interface of your React applications with a visually appealing interaction effect.

## Installation
To install `react-ripple-btn`, run the following command in your project directory:

```bash
npm i react-ripple-btn
```

## Usage

```javascript
import React from 'react';
import { RippleBtn } from 'react-ripple-btn';

const MyComponent = () => {
  return (
    <RippleBtn color="white" duration={800} className="bg-red-500 p-2 rounded-xl">
      Hello how
    </RippleBtn>
  );
};

```

## Props

The `RippleBtn` component accepts the following props:

- `color`: The color of the ripple effect. It can be any valid CSS color value. Default is `white`.
- `duration`: The duration of the ripple effect in milliseconds. Default is `850`.
- `className`: Additional CSS classes to apply to the button. This can be used to style the button as needed.

## Customization

You can customize the appearance of the `RippleBtn` component using the `className` prop. This allows you to apply any CSS styles you need. For example, you can change the background color, padding, border radius, and more.

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to contribute code, please open an issue or submit a pull request.

## License

`react-ripple-btn` is licensed under the MIT License. See the `LICENSE` file for more details.