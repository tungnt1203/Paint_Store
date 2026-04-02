import express from "express";
import http from "http";
import path from "path";
import { createServer as createViteServer } from "vite";

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const isProd = process.env.NODE_ENV === "production";

  const csp = isProd
    ? [
        "default-src 'self'",
        "base-uri 'self'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "script-src 'self' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' https:",
        "frame-src https://www.google.com",
        "require-trusted-types-for 'script'",
        "trusted-types default",
        "upgrade-insecure-requests",
      ].join("; ")
    : [
        "default-src 'self'",
        "base-uri 'self'",
        "frame-ancestors 'none'",
        "object-src 'none'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com data:",
        "img-src 'self' data: blob: https:",
        "connect-src 'self' ws: wss: http: https:",
        "frame-src https://www.google.com",
      ].join("; ");

  app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", csp);
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("X-Frame-Options", "DENY");
    if (isProd) {
      res.setHeader(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains; preload",
      );
    }
    next();
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  if (!isProd) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: { server: httpServer },
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(
        `\nCổng ${PORT} đang được dùng. Gỡ tiến trình cũ hoặc chạy:\n  PORT=3001 npm run dev\n`,
      );
    } else {
      console.error(err);
    }
    process.exit(1);
  });

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
