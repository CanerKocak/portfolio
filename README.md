https://v6f4s-raaaa-aaaag-alffa-cai.icp0.io/

## Deployment
This project is built to be deployed on the Internet Computer (IC) platform. Follow these steps to deploy the application:

1. Install dependencies and start the local development server:
   ```
   npm install && npm start
   ```

2. Deploy to a local replica or staging server:
   ```
   dfx deploy
   ```

3. Deploy to the production IC network:
   ```
   dfx deploy --network=ic
   ```

For detailed deployment instructions, please refer to the [Internet Computer documentation](https://sdk.dfinity.org/docs/quickstart/network-quickstart.html).

## Project Structure
The project follows a structured organization:
```
- src/portfolio2_backend: Rust backend canister (currently not used)
- src/portfolio2_frontend: Svelte frontend application
  - src/lib/components: Directory for reusable Svelte components
  - src/routes: Directory for Svelte route components (currently not used)
```

## Technologies Used
The project incorporates the following technologies:
- [Svelte](https://svelte.dev/): JavaScript framework for building user interfaces
- [Rust](https://www.rust-lang.org/): Programming language for the backend canister (currently not used)
- [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework for styling
- [CodeMirror](https://codemirror.net/): Text editor library for code editing functionality
- [Internet Computer (IC)](https://internetcomputer.org/): Decentralized platform for deploying and running applications

## Notes
- The project utilizes a custom Content Security Policy (CSP) for enhanced security. If needed, modify the CSP configuration in the `.ic-assets.json5` file.
- Responsive design is implemented to provide optimal user experiences across different devices. The layout adapts to both mobile and desktop views.
