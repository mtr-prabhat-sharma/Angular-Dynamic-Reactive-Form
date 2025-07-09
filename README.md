# 🧠 Angular Reactive Dynamic Forms

This project demonstrates how to create **dynamic forms** in Angular using **Reactive Forms**. It showcases generating form controls and form groups at runtime based on a JSON configuration, making your forms scalable, flexible, and maintainable.

---

## 🚀 Features

- ✅ Dynamic form generation from JSON
- ✅ Reactive Forms with validation
- ✅ Custom form controls support
- ✅ Real-time validation and error handling
- ✅ Scalable form structure (nested forms, arrays)
- ✅ Easily extensible with custom components

---

## 🛠️ Technologies Used

- Angular (vX)
- TypeScript
- Reactive Forms Module
- Angular Material (optional for UI)
- RxJS

---


---

## 📄 Example Form Configuration

```ts
[
  {
    type: 'text',
    label: 'Full Name',
    name: 'fullName',
    validators: ['required']
  },
  {
    type: 'email',
    label: 'Email Address',
    name: 'email',
    validators: ['required', 'email']
  },
  {
    type: 'select',
    label: 'Country',
    name: 'country',
    options: ['India', 'USA', 'UK'],
    validators: ['required']
  }
]


