package org.rishav;

import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.support.ByteArrayMultipartFileEditor;

@RestController
public class ProductEntryController {
	@InitBinder
    protected void initBinder(ServletRequestDataBinder binder) {
        binder.registerCustomEditor(byte[].class,
                new ByteArrayMultipartFileEditor());
    }
	
	@RequestMapping(value = "/products" , method = RequestMethod.POST)
	public String saveProducts(ProductEntryForm productEntryForm){
		return productEntryForm.getProducts().get(0).getDescription();
	}
}
