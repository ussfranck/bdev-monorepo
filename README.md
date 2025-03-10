# bdev-monorepo 🚀

A minimal CLI tool to initialize a modern monorepo with Next.js (App Router), NestJS, and TurboRepo, built with TypeScript and PNPM.

---

## ✨ Features
- **Monorepo Setup**: Initialize a PNPM monorepo with two main apps:
    - **Frontend**: Next.js (App Router, TypeScript, TailwindCSS v4).
    - **Backend**: NestJS (TypeScript, optional Prisma/GraphQL).
- **TurboRepo**: Efficient monorepo management with Vercel's TurboRepo.
- **Step-by-Step CLI**: Interactive setup with `inquirer` prompts and a sleek progress spinner (`ora`).
- **Customizable**: Choose your frontend/backend folder names and whether to include Prisma or GraphQL API.
- **Minimal & Fast**: A lightweight tool to get you started quickly.

---

## 📋 Prerequisites
- **Node.js**: v18.5.0 or higher (tested on v18.5.0).
- **PNPM**: Install with `npm install -g pnpm`.
- **Windows/Linux/macOS**: Tested on Windows (node18-win-x64), but should work cross-platform.

---

## 🚀 Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ussfranck/bdev-monorepo.git
   cd bdev-monorepo

2. Install dependencies:
    ```bash 
    pnpm install 
    pnpm pre-build // to generate al js files used by PKG
    pnpm build // to generate executable called "build.exe" (on windows)

3. Example Output
After running the CLI, you’ll see an executable on the root dir called "build", run it and fill all field, then you'll see:

🎉 Monorepo my-monorepo initialized!
- Frontend: cd apps/web && pnpm dev
- Backend: cd apps/api && pnpm start:dev

🤝 Love this tool? Contribute on GitHub: https://github.com/ussfranck/bdev-monorepo
Your minimal monorepo tool awaits your ideas! 🚀


##### Known Issues
- PKG v5.8.1 may show bytecode warnings for some dependencies (ora, chalk, etc.), but they don’t affect functionality.

- If you encounter ERR_REQUIRE_ESM errors, ensure you’re using ora@5.4.1, inquirer@8.2.4, and "esModuleInterop": true in tsconfig.json.

##### Contributing
Love bdev-monorepo? Want to make it even better? Contributions are welcome!
Fork the repository.

- Create a new branch (git checkout -b feature/your-idea).

- Make your changes and commit (git commit -m "feat: add your feature").

- Push to your branch (git push origin feature/your-idea).

- Open a Pull Request on GitHub.

Check out the repo: https://github.com/ussfranck/bdev-monorepo

