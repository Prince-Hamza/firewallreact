
import axios from "axios"




export class SubCategories {

    constructor() {
        this.Auth = `consumer_key=ck_42a75ce7a233bc1e341e33779723c304e6d820cc&consumer_secret=cs_6e5a683ab5f08b62aa1894d8d2ddc4ad69ff0526`
        this.ParentCategories = [{ name: "Server &amp; Storage", id: 1074, subcategories: [] }, { name: "Network Equipment", id: 1071, subcategories: [] }, { "id": 1083, "name": "Unified Communication &amp; Collaboration", subcategories: [] }, { "id": 618, "name": "Software Service Support License", subcategories: [] }]

    }

    async Main() {
        //get all categories

        const categories = await this.getCategories()

        //if cat.parent == parent.id add to subcategories
        console.log('searching in categories')
        this.ParentCategories.map((parentCategory) => {
            categories.map((category) => {
                if (category.parent == parentCategory.id) parentCategory.subcategories.push(category)
            })
        })


       return this.ParentCategories

    }

    getCategories = async () => {
        var pages = [1, 2, 3], allCategories = []
        var catReqs = pages.map((page) => {
            return this.getCategoriesOnPage(page)
        })

        var catsResp = await Promise.all(catReqs)
        catsResp.forEach((catsOnPageArray) => {
            catsOnPageArray.forEach((category) => {
                allCategories.push(category)
            })
        })

        return allCategories
    }

    getCategoriesOnPage = async (page) => {
        var resp = await axios.get(`https://shop.firewallforce.se/wp-json/wc/v3/products/categories?page=${page}&per_page=100&${this.Auth}`)
        return resp.data
    }




}

