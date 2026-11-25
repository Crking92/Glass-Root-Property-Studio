# Glass Root Property Studio — development rules

## Scope and independence
- Build a free, independent real-world property reconstruction and editing application, from residential lots to parks and larger sites. Focus on existing physical conditions, not landscape recommendations or ecological scoring.
- Three.js is the graphics engine (initial pinned version r180). Canonical local coordinates are feet: +X east/right, +Z south/down, +Y up. Store units, local origin, scale status, geographic CRS/transform when available, and source provenance. Never label an uncalibrated photo as measured.
- Read existing code in Crking92/GRG-Wildlands-Explorer and Crking92/Glass-Root-Landscape-Studio before duplicating GIS or 3D features. Adapt verified methods with attribution; do not modify those repositories, create runtime dependencies on them, or copy their unrelated plant/ecology data. Preserve interoperability with future landscape studio imports.
- Aerial, ground photos and video are first-class inputs. Keep raw reference assets separate from editable geometry. Distinguish measured, source-derived, estimated, manually modeled, and AI-inferred data. Unknown must not become zero. Human approval of detected features is required.
- No paid dependencies, mandatory account, analytics, or automatic upload of private property files. Public repo holds software and fictional examples only. External GIS requests require explicit user action and source disclosure. Record source, date, units, spatial coverage, method, uncertainty, and license as available. Do not assume data licenses match code license.
- Static GitHub Pages cannot run heavy server processing; use optional local reconstruction tools and open import/export formats later. Raw scans are reference layers, not editable semantic objects.
- Inspect latest branch and file SHAs before edits, preserve other work, document actual tests and limitations. Never claim live browser QA or deployment without evidence.

## Development order
1. Local 3D workspace, scale calibration, image alignment, editable basic objects, save/open.
2. Address, aerial and parcel data; building footprints, georeferencing.
3. Elevation grids and LiDAR-derived terrain; image-assisted feature tracing and ground photo alignment.
4. Scan import, optional local photogrammetry from images/videos, semantic refinement and export.
5. Future interoperability; defer ecological analysis and native planting design.
- User explicitly deferred detailed architectural modeling (roof styles, materials, doors/windows) on 2026-11-25. Retain editable basic geometry; revisit Landscape Studio's architectural work later without duplicating effort.
