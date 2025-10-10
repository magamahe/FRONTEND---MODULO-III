# Explorando el DOM con JavaScript

Cuando trabajamos con el DOM, podemos inspeccionar los elementos de dos formas principales: `console.log()` y `console.dir()`.

---

## ✅ `console.log(document.body)`

🟢 **Qué hace:** Muestra el elemento **como HTML**, igual que se ve en la página.  
👉 Verás sus etiquetas `<body>...</body>`.  
👉 Es una **vista visual del DOM**.

**Ejemplo de salida:**
```html
<body>
   <h1>Explorando el DOM</h1>
   <p>Este es un párrafo de prueba.</p>
   ...
</body>
```

✅ **Útil para:** mirar el contenido tal como está en la página.

---

## ✅ `console.dir(document.body)`

🟠 **Qué hace:** Muestra el elemento **como un objeto de JavaScript**.  
👉 Aparece con flechitas desplegables.  
👉 Permite ver **propiedades y métodos internos**, como `children`, `innerHTML`, `style`, `onclick`, etc.

**Ejemplo de salida:**
```
body
   accessKey: ""
   attributes: NamedNodeMap
   childElementCount: 2
   children: HTMLCollection(2)
   firstChild: h1
   innerHTML: "<h1>Explorando el DOM</h1>..."
   style: CSSStyleDeclaration
   ...
```

✅ **Útil para:** entender cómo JavaScript ve el DOM y cómo podemos manipularlo.

---

## 🎯 Resumen

| Comando | Muestra |
|---------|---------|
| `console.log()` | El HTML tal como se ve en la página |
| `console.dir()` | El objeto JavaScript con todas sus propiedades y métodos |

