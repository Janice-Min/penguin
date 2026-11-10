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

1. **Projects:** edit `PROJECTS` in `app.js`. The comment at the top lists every field. `featured: true` puts a project on the home page, `cats` sets the filter tabs, and `paper`, `table`, `findings`, `specs`, `diagram`, `methodFigures`, `figures` and `links` add the extra blocks you see on the detail pages.
2. **Latest publication on the home page:** built automatically from the project that has `paper`.
3. **Home, About, Research and CV pages:** edit the text directly in the relevant `.html` file.
4. **Accent colors:** change CSS variables near the top of `style.css`.
5. **Images:** live in `assets/`. Paper figures are `nav-*.png`, the drink tray is `tray-*`, and the cart-pole drawing is `cartpole.svg` (plain SVG, editable in any text editor).
6. **Contact:** the email address appears in the footer of every page and in the CV page's Contact row.
7. **Home hero:** the record player with a small polaroid of Janice (`assets/janice-polaroid.jpg`, the full photo resized, location data removed). Its size and tilt are in the "Hero: a small polaroid" block near the end of `style.css`. `assets/janice-og.jpg` is the image for link previews.

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

- Add the cart-pole comparison results once they are final.
- Add the drink tray prototype photos and stair test results.
- Add a Google Scholar link once the profile exists.
- Optionally set up a custom domain.


## Penguin photo update

첨부한 펭귄 사진 3장을 원본 그대로 assets에 포함했습니다.
- penguin-portrait.jpg: 공통 로고·favicon
- penguin-beanie.jpg: 공통 인사 버튼·About 카드
- penguin-curious.jpg: 홈페이지 연구 관심사 영역

사진의 모양과 배치는 style.css 마지막 부분에서 조정할 수 있습니다.
압축을 푼 뒤 index.html을 열면 확인할 수 있습니다. 기존 프로젝트 필터와 모바일 메뉴, 펭귄 인사 버튼을 유지했습니다.
