# Stackflow Appwrite

A modern Next.js application template integrating [Stackflow](https://stackflow.dev/) and [Appwrite](https://appwrite.io/) for building scalable, full-stack web apps.

---

## 🚀 Features

- **Next.js**: React framework for production.
- **TypeScript**: Type-safe codebase.
- **Stackflow**: Powerful navigation and state management.
- **Appwrite**: Backend-as-a-Service for authentication, database, storage, and more.
- **ESLint & Prettier**: Code quality and formatting.
- **PostCSS**: CSS processing.
- **Environment Variables**: Managed via `.env`.

---

## 📁 Project Structure

```
stackflow-appwrite/
├── .env                   # Environment variables
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app directory (routes, pages)
│   ├── components/        # Reusable React components
│   ├── lib/               # Library utilities
│   ├── models/            # Data models and types
│   ├── store/             # State management
│   ├── utils/             # Utility functions
│   └── middleware.ts      # Custom middleware
└── ...
```

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your Appwrite credentials and other settings.

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your app.

---

## 🧩 Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Run ESLint

---

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Stackflow](https://stackflow.dev/)
- [Appwrite](https://appwrite.io/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📝 License

MIT

---

## 🤝 Contributing

Feel free to open issues or pull requests!

---

## 📄 Acknowledgements

- [Stackflow](https://stackflow.dev/)
- [Appwrite](https://appwrite.io/)
- [Next.js](https://nextjs.org/)