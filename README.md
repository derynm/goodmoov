# goodmoov 

**Demo:** [goodmoov.netlify.app](https://goodmoov.netlify.app)


## Tech Stack

- **Framework:** Nuxt 4
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **API:** The Movie Database (TMDB)
- **Deployment:** Netlify

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm
- TMDB Access Token

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd goodmoov
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
NUXT_API_URL = https://api.themoviedb.org
NUXT_ACCESS_TOKEN = xxxxxxxxx
```

4. Start development server:
```bash
pnpm run dev
```

open `http://localhost:3000` to see the local application.

## 🎯 API Configuration

This application use [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api) API:

1. Create an account at [TMDB](https://www.themoviedb.org/)
2. Go to Settings > API and request API 
3. Add your API Read Access Token to the `.env` file as `NUXT_ACCESS_TOKEN`


