# Countdown Timer

A Svelte-based countdown timer application that allows users to create, preview, and manage countdowns. Users can input times in plain English (e.g., "1 hour later") and track the remaining time until the event.

## Live Demo

Check out the live demo at https://warsame.me/countdown.

## Features

- **Dynamic Countdown**: Real-time countdown updates using Svelte stores.
- **Natural Language Parsing**: Input times in plain English, powered by `chrono-node`.
- **Persistent Storage**: Countdown items are saved locally and synchronized across tabs.
- **Customizable Previews**: Visual feedback for countdown validity and style.
- **Responsive Design**: Optimized for various screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/warsam-e/countdown.git
   cd countdown
   ```

2. Install dependencies:

   ```bash
   bun i
   ```

3. Run the development server:

   ```bash
   bun dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Usage

1. Enter a title and a time (e.g., "1 hour later") in the input fields.
2. Preview the countdown and ensure it is valid.
3. Click "Create" to add the countdown to the list.
4. View and manage your countdowns in the list.

## Technologies Used

- **Svelte**: Frontend framework for building reactive user interfaces.
- **Svelte-Persisted-Store**: For managing persistent state across sessions.
- **Chrono-Node**: Natural language date parser.
- **SCSS**: Styling with modular and reusable components.

## Deployment

To build the project for production:

```bash
bun run build
```

The output will be in the `docs` folder, ready for deployment to static hosting platforms.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
