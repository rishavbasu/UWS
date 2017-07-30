package com.uws.productentry.service;

import com.uws.productentry.domainobject.Product;

/**
 * @author Rishav
 *
 */
public interface ProductEntryService {

	/**
	 * @param products
	 */
	void saveProducts(Iterable<Product> products);

	/**
	 * @param product
	 */
	void saveProduct(Product product);

	/**
	 * @param id
	 * @return
	 */
	Product fetchProductById(String id);
}
