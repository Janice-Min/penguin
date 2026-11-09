# Penguin — Janice Jungbin Min's Research Portfolio

A responsive, bright, minimal portfolio with a small penguin mascot. Built with **plain HTML, CSS and JavaScript** for easy publishing on GitHub Pages. No package manager or build step needed.

## Pages

- `index.html`: Home, introduction, selected projects, research highlights
- `projects.html`: All projects, interactive topic filtering
- `project.html?slug=gripper`: Reusable detail page for each project (shows the paper and abstract when a project has `paper`)
- `research.html`: Research areas and working style
- `about.html`: About, experience and skills
- `cv.html`: Browser-readable CV and contact. Use **Print / Save CV as PDF**.

## Edit the content

1. **Project names, descriptions, methods and results:** edit `PROJECTS` in `app.js`.
2. **Home, About, Research and CV pages:** edit the text directly in the relevant `.html` file.
3. **Accent colors:** change CSS variables near the top of `style.css`.
4. **Illustrations / penguin:** images live in `assets/`. Project cards are text-only.
5. **CV:** verify every entry before publishing. Add email details and your actual CV PDF when ready. Current CV page can be saved as PDF with the Print button.

The home hero is a CSS/SVG record player with the penguin photo as the record label. Tapping the record plays the song.

## Preview locally

Open `index.html` directly in a browser, or from this folder run:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000/.

## Deploy

The site lives at the repository root, so GitHub Pages serves it at **https://janice-min.github.io/penguin/**.

1. Commit and push to `main`.
2. In GitHub: **Settings > Pages > Build and deployment > Deploy from a branch**, with `main` and `/(root)`.
3. `penguin-portfolio/index.html` only redirects the old long link to the new address. It can be deleted once nobody uses the old link.

## Background music

The record on the home page and the floating music card (bottom left) play CHUU's "Strawberry Rush" through the official Spotify embed. The card stays hidden while the record is on screen and nothing is playing. Paste the song's Spotify link into `MUSIC.spotifyUrl` at the top of the music section in `app.js`. While the player is open, links inside the site swap the page content instead of reloading, so the song keeps playing while visitors browse.

### Suggested next iterations

- Add verified result graphs and role details on project pages.
- Attach a PDF CV and contact email (if desired).
- Add writing / notes only after the essential portfolio is polished.
- Optionally set up a custom domain.


## Penguin photo update

첨부한 펭귄 사진 3장을 원본 그대로 assets에 포함했습니다.
- penguin-portrait.jpg: 공통 로고·favicon
- penguin-beanie.jpg: 공통 인사 버튼·About 카드
- penguin-curious.jpg: 홈페이지 연구 관심사 영역

사진의 모양과 배치는 style.css 마지막 부분에서 조정할 수 있습니다.
압축을 푼 뒤 index.html을 열면 확인할 수 있습니다. 기존 프로젝트 필터와 모바일 메뉴, 펭귄 인사 버튼을 유지했습니다.
