---
title: "From Vue to React: A Practical Introduction"
date: 2026/02/08
tags: [React, Vue]
excerpt: "Both Vue and React are popular UI libraries with similar goals but different philosophies. This post highlights the main differences, then walks through React’s core ideas so you can get productive quickly."
---


## Introduction

If you’ve been building with Vue and are now diving into React, you’re in good company. Both are popular UI libraries with similar goals but different philosophies. This post highlights the main differences, then walks through React’s core ideas so you can get productive quickly.

---

## Vue vs React: How They Differ

### 1. Template vs JSX

- **Vue**: Uses an HTML-like template syntax in `.vue` files. Directives like `v-if`, `v-for`, `v-model` live in the template; logic stays in `<script>`.
- **React**: Uses **JSX** — JavaScript that looks like HTML. Conditions and loops are written with normal JS (`&&`, `.map()`, ternary), so “markup” and logic live in the same place.

### 2. Reactivity

- **Vue**: Reactive by default. You change `data` or `ref()`/`reactive()` and the UI updates. Vue’s compiler tracks dependencies for you.
- **React**: **Explicit updates**. You change state only via `useState` (or similar) setters; re-renders are triggered by those state updates. There’s no automatic dependency tracking.

### 3. Component Model

- **Vue**: Single-File Components (SFC): one file with `<template>`, `<script>`, and `<style>`. Options API or Composition API (`setup`, `ref`, `computed`, etc.).
- **React**: Components are **functions** that return JSX. No separate template block; everything is JavaScript/JSX. Hooks (`useState`, `useEffect`, etc.) provide state and side effects.

### 4. Styling

- **Vue**: `<style scoped>` in SFC, or CSS-in-JS. First-class scoped styles.
- **React**: No built-in scoped CSS. You use plain CSS, CSS Modules, styled-components, Tailwind, or other CSS-in-JS.

### 5. Learning Curve

- **Vue**: Often feels easier at first: templates, directives, and reactive data are familiar if you know HTML and a bit of JS.
- **React**: Asks you to think in “plain JavaScript” and to embrace JSX and the one-way data flow. Slightly steeper at first, but very consistent once you get it.

---

## Core React Concepts

### 1. Components Are Functions

In React, a component is a function that returns what to render (usually JSX):

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

No `data()` or `setup()` — props are the first argument; the return value is the UI.

### 2. JSX: JavaScript + Markup

JSX is syntactic sugar for `React.createElement`. You can use any JavaScript expression inside `{}`:

```jsx
function Greeting({ user, isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <p>Hi, {user.name}</p> : <p>Please log in</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}
```

Familiarize yourself with `key` for lists and the fact that there’s no `v-if`/`v-for` — it’s all JS.

### 3. State with `useState`

State is the source of truth for data that changes over time. Updating it triggers a re-render:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

Think of `useState` as “reactive” data that you’re allowed to change only through the setter (`setCount`). No `ref()` or `reactive()` — just one value and one setter per piece of state.

### 4. Side Effects with `useEffect`

For things that happen “outside” the render (API calls, subscriptions, DOM, timers), you use `useEffect`:

```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then(setUser);
  }, [userId]); // re-run when userId changes
  return user ? <p>{user.name}</p> : <p>Loading...</p>;
}
```

The dependency array `[userId]` is similar to Vue’s `watch` sources: when they change, the effect runs again.

### 5. One-Way Data Flow

Data flows from parent to child via **props**. Children don’t mutate props; they communicate up by calling **callback props** (functions passed from the parent):

```jsx
function Parent() {
  const [value, setValue] = useState('');
  return (
    <Child
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
}
```

So: “props down, events (callbacks) up” — no `v-model`; you implement two-way binding with a value + onChange if you need it.

### 6. Composition Over Configuration

React favors small, reusable functions. You compose UIs by nesting components and passing props and children, rather than configuring a big component with many options. Custom Hooks let you reuse stateful logic (similar to Vue’s Composition API composables):

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return width;
}
```

---

## Quick Vue → React Cheat Sheet

| Vue | React |
|-----|--------|
| `v-if` / `v-show` | `{condition && <Node />}` or `style={{ display }}` |
| `v-for` | `items.map(item => <Item key={item.id} />)` |
| `v-model` | `value={x}` + `onChange={e => setX(e.target.value)}` |
| `ref()` / `reactive()` | `useState()` |
| `computed()` | `useMemo()` or derive in render |
| `watch()` / `watchEffect()` | `useEffect()` |
| `@click` | `onClick` |
| `:class` / `:style` | `className` / `style={{ ... }}` |

---

## Summary

- **Vue**: Templates, directives, built-in reactivity, SFC. Feels like “HTML + a bit of JS.”
- **React**: JSX, “everything is JS,” explicit state updates, and Hooks. Feels like “JavaScript that describes the UI.”

Once you’re comfortable with components as functions, JSX, `useState`, and `useEffect`, you’ll find that most Vue patterns have a direct React counterpart. Use this post as a reference while you work through your first React project.
