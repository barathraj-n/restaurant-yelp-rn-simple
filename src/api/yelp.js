import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ut93MsAbzy_3EiFeDYNgZ58CoIML2-wCF6QYX5kNgKNlesCO1DSecp3Cpp1hH6nPGH4fiQcfJL6abFHxMhh8Y1tZ-VfYEx1e4eIjoI1DKXDy0komrOQhalvIBiXyYXYx'
    }
});