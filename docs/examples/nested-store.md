# Nested store example

```ts
import { SignalState } from 'sigurd';

class FiltersStore {
  public query = new SignalState('');
}

class TodoStore {
  public title = new SignalState('Inbox');
  public filters = new FiltersStore();
}
```

```tsx
using store = useTodoStore();

return (
  <>
    <h1>{store.title.value}</h1>
    <input value={store.filters.query.value} />
  </>
);
```
