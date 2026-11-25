# Glass Root Property Studio v0.0.1

Independent free 3D property reconstruction and modeling workspace. [Open the website](https://crking92.github.io/Glass-Root-Property-Studio/).

## First release
- Three.js r180 (MIT) and OrbitControls from pinned jsDelivr imports; requires internet on initial load and WebGL 2. Local project assets do not upload to a server.
- Blank site and fictional residential example; local X/right, Z/down, Y/up coordinates in feet. No true north, geographic origin or CRS until GIS is added.
- Import a JPEG/PNG/WebP image, downsample to at most 2048 pixels on the long side, center it in the site and show it in plan or 3D. Initial dimensions are explicitly assumed. Click two image points and provide a known distance in feet to uniformly scale image and site. Calibrate before drawing; calibration is disabled once objects exist. New drawing is blocked while an uncalibrated image is present. Aerial opacity and visibility controls.
- Draw rectangular building and hardscape footprints, straight fence segments, and approximate existing tree proxies. Select in the viewport or inventory, edit name, position, dimensions and rotation in inspector, delete. Measurements in feet and meters. Plan and orbit views, fit, undo/redo, local JSON save/open including image. Explicit file export is required for durable storage; no autosave yet.
- All geometry is manually modeled, not a survey. No automatic object detection, GIS requests, geographic alignment, photo/video reconstruction, point clouds, terrain elevation, detailed roof geometry, material editing or GLB export yet.

## Getting started
1. Open Example, rotate and zoom in 3D, select an object, edit its height or width and undo. Switch to Plan view.
2. Start New, import a straight-down aerial image you have permission to use. Choose Calibrate two points, click recognizable endpoints and enter measured distance, then Apply scale.
3. Draw building/hardscape with two corners, fence with two endpoints, tree with one trunk location. Select or edit via inventory. Escape cancels the current tool. While drawing, camera movement is disabled; switch to select to navigate.
4. Save project JSON and reopen it to verify the scene and image. Keep property images and project files private; do not upload them to this public repository.

## Related repositories and data source reuse
Read-only review of [Landscape Studio](https://github.com/Crking92/Glass-Root-Landscape-Studio) README and Three.js source, and [Wildlands Explorer](https://github.com/Crking92/GRG-Wildlands-Explorer) README informed the coordinate system, source integrity principles and next GIS phases. This prototype uses independently written geometry and calibration code; it does not import either repository at runtime. Neither related repository was modified. Reuse and verify actual GIS request implementations before adding GIS features.
- Candidate providers: Census Geocoder and Hays County address points; USGS NAIP / National Map imagery; TxGIO parcels; USGS EPQS / 3DEP elevation. Provider coverage, licenses, current API and browser behavior must be verified before implementation.
- No environmental or botanical data integration yet. See [AGENTS.md](AGENTS.md) for scope and data integrity rules.

## Tests and constraints
- Static JavaScript async body compilation, literal element ID reference/duplicate checks, independent arithmetic calibration example (60-by-80 ft diagonal rescaled from 100 to 150 ft), and fence endpoint orientation check passed. After scale guard changes JavaScript syntax was rechecked.
- Actual WebGL/browser interaction, image decode, camera orientation, save/reopen and performance still require live user testing. GitHub Pages build/deployment not verified by these checks.
- Uniform image scale only; no perspective correction, rotation or translation alignment yet. Use orthorectified imagery and known ground measurements. Model proxies are schematic, not species identifications or architectural surveys. Maximum 10,000 ft per site dimension, 1,000 objects, 30 MB source image and 16 MB project import. Performance on large sites is untested.
- Project file schema version 1 is independent of Landscape Studio. Source code MIT; third-party and user images have their own rights.

## Next milestone
Verify the live prototype, fix interaction issues, then build address/coordinate lookup and scaled aerial/parcel import based on existing GIS work. Follow with editable polygon building footprints and more detailed structure geometry, real terrain, image-assisted tracing, local photographs and video reconstruction.
