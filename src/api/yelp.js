import axios from "axios";



export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer BrzAlv2N2waelEdPr99VL1KSbSGtq53SZ5sd248q2_MYsHc46LWKyvu_OBzN1Z1MKv-fI8Svfi4seFrTIZVXHobfWG6pBf3S0Z4PehB-xsxgsecBGpwPJ2yxnCPlXnYx"
    }
});
