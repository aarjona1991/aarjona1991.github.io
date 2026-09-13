---
name: firebase-rest
description: Fetch Firebase Realtime Database over REST with React Query parent-path reads. Use when adding or changing site content fetches, heroHooks, fetchFirebaseData, navigation queries, or any firebaseio.com path.
---

# Firebase REST data

Use the existing REST helper. Do not add the `firebase` SDK.

```ts
fetchFirebaseData(path) // GET {databaseURL}/{path}.json
```

Database URL lives in `src/connector/functions.ts`.

## Fetch parents, not leaves

Prefer one request per object the UI needs:

| Query key | Path |
|---|---|
| `['profile']` | `site/shared/profile` |
| `['hero', language]` | `site/${language}/hero` |
| `['socialLinks']` | `site/shared/social` |
| `['navItems', language]` | `site/${language}/navigation` |

Do not split those into per-field GETs (`.../name`, `.../greeting`, …).

Language-specific copy lives under `site/en` and `site/es`. Shared data lives under `site/shared`.

## React Query

Reuse this cache shape unless the user asks otherwise:

```ts
const CACHE_MS = 1000 * 60 * 60 * 24;

const cacheOptions = {
    staleTime: CACHE_MS,
    gcTime: CACHE_MS,
    refetchOnWindowFocus: false,
};
```

Derive UI fields from the parent object (`profile.data?.fullName`, `hero.data?.greeting`).

Realtime Database objects with numeric keys (for example `hero.professions`) are not arrays. Convert with `Object.values` before using `.length` or index access.

## Schema

`firebase/realtime-database.json` is the local snapshot of the tree. Match new paths to that file.
