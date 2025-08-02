# 🐛 Erro: "A component is changing an uncontrolled input to be controlled"

## 📌 Descrição do Problema

Esse erro acontece muito em formulários React, especialmente ao trabalhar com bibliotecas como React Hook Form.

Ele ocorre quando um `<input>` começa como **não controlado** (sem o atributo `value`, ou com `value={undefined}`) e, posteriormente, passa a ser **controlado** (com `value` definido por `useState` ou props). O React considera essa mudança incorreta, pois alternar entre esses dois modos quebra o ciclo de vida esperado dos componentes, podendo causar comportamentos inesperados.

---

## ❌ Exemplo com Erro

```tsx
const [inputValue, setInputValue] = useState(undefined);

return (
  <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
);
```

Nesse exemplo:

- O estado inicial do `inputValue` é `undefined`.
- Isso faz com que o `<input>` inicie como **não controlado**.
- Ao digitar, o `setInputValue` define um valor, tornando o campo **controlado**.
- O React detecta essa transição e exibe o erro:

> "A component is changing an uncontrolled input to be controlled."

Esse comportamento pode ocorrer, por exemplo, quando se usa React Hook Form e o valor inicial do campo não está definido, resultando em `undefined`.

---

## ✅ Solução

Para corrigir o erro, garanti que o `<input>` **sempre tenha um valor controlado** desde o início — mesmo que ele seja uma string vazia.

```tsx
const [inputValue, setInputValue] = useState("");

return (
  <input
    type="text"
    value={inputValue ?? ""}
    onChange={(e) => setInputValue(e.target.value)}
  />
);
```

se estiver usando valores de formulários que podem vir como `undefined` ou `null`:

```tsx
<input
  type="text"
  value={inputValue ?? ""}
  onChange={(e) => setInputValue(e.target.value)}
/>
```

---

## ✅ Benefícios da Solução

- Garante que o campo seja **sempre controlado**, independentemente do estado inicial.
- Elimina o warning do React.
- Evita comportamentos inconsistentes em formulários.
- Melhora a previsibilidade e estabilidade do componente.

---

## 🧠 Dica Final

para quem for criar `<input>` recebe um `value` via `useState`, props ou bibliotecas como React Hook Form, **certifique-se de que esse valor nunca seja `undefined` ou `null`**. Prefira usar uma string vazia como valor inicial:

```tsx
const [inputValue, setInputValue] = useState("");
```

Ou, ao exibir valores:

```tsx
value={inputValue ?? ''}
```
