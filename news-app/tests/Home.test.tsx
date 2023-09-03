// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Home from '../src/pages/Home';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';

// interface Article {
//   title: string;
//   description: string;
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   content: string;
// }

// const fakeArticles: Article[] = [
//   {
//     title: 'News 1',
//     description: 'Description 1',
//     url: 'https://example.com/news1',
//     urlToImage: 'https://example.com/image1.jpg',
//     publishedAt: '2023-01-01T00:00:00Z',
//     content: 'Content 1',
//   },
//   {
//     title: 'News 2',
//     description: 'Description 2',
//     url: 'https://example.com/news2',
//     urlToImage: 'https://example.com/image2.jpg',
//     publishedAt: '2023-01-02T00:00:00Z',
//     content: 'Content 2',
//   },
// ];

// const server = setupServer(
//   rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
//     return res(
//       ctx.json({
//         status: 'ok',
//         totalResults: fakeArticles.length,
//         articles: fakeArticles,
//       })
//     );
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// describe('Home Component', () => {
//   it('menampilkan teks "Selamat Datang di Halaman Beranda"', async () => {
//     render(<Home />);
//     const welcomeText = screen.getByText('Selamat Datang di Halaman Beranda');
//     expect(welcomeText).toBeInTheDocument();
//   });

//   it('menampilkan komponen anak "Card"', async () => {
//     render(<Home />);
//     const cardElement = screen.getByTestId('Card'); // Atur data-testid pada komponen Card untuk mengidentifikasinya
//     expect(cardElement).toBeInTheDocument();
//   });
// });
