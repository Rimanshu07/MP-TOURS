# Future Modules

This directory is reserved for future feature modules.

Only create actual module folders when a clear backend requirement is identified.

Example future pattern:

```text
src/modules/
├── tours/
├── destinations/
├── hotels/
├── bookings/
└── enquiries/
```

Each module should follow the HMVC pattern:

```text
route -> controller -> service -> model
```
