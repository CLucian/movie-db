import { paginationNumber } from './Pagination';

describe('PaginationNumbers', () => {
	it('handles currentPage 1 with a few pages', () => {
		const values = paginationNumber(1, 6)

		expect(values).toEqual({ startPage: 1, endPage: 5 })
	})
	it('handles currentPage 3 with a few pages', () => {
		// ...
	})
})

