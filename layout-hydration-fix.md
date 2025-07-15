
# Correção de Hydration Error no Next.js (arquivo `layout.tsx`)

**Arquivo com erro:**

```
src/app/layout.tsx  
c:\Users\marco\Downloads\Nova pasta (3)\cvlaunch-master\src\app\layout.tsx
```

---

## ⚠️ Trecho de código original (com potencial para erro de hydration):

```tsx
return (
  <html lang="pt-BR">
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontTitle.variable,
        fontSans.variable
      )}
    >
      <ClientProviders>
        {children}
      </ClientProviders>
    </body>
  </html>
);
```

---

## ✅ Código corrigido (com `suppressHydrationWarning`):

```tsx
return (
  <html lang="pt-BR" suppressHydrationWarning={true}>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontTitle.variable,
        fontSans.variable
      )}
    >
      <ClientProviders>
        {children}
      </ClientProviders>
    </body>
  </html>
);
```

---

## 📝 Resumo

A única alteração foi:

```diff
- <html lang="pt-BR">
+ <html lang="pt-BR" suppressHydrationWarning={true}>
```

Essa mudança corrige o **erro de hydration mismatch** causado por diferenças entre o conteúdo renderizado no servidor (SSR) e no cliente — comum em aplicações que usam **temas dinâmicos** com `next-themes`.

---

> 💡 Essa prática é recomendada quando se usa temas (`light`, `dark`) que alteram o DOM dinamicamente logo após o carregamento da página.
