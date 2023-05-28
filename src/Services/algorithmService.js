import axios from "axios";
const baseUrl = "http://127.0.0.1:8000/api/algorithms"

export const algorithmService=  {

    naiveBayes:async(text)=>{
        return axios.post(`${baseUrl}/NaiveBayes`,{text:text}).then(res=>res.data).catch(err=>err);
    },
    Knn:async(text)=>{
        return axios.post(`${baseUrl}/Knn`,{text:text}).then(res=>res.data).catch(err=>err);
    },
    SVM:async(text)=>{
        return axios.post(`${baseUrl}/SVM`,{text:text}).then(res=>res.data).catch(err=>err);
    },
    logisticRegression:async(text)=>{
        return axios.post(`${baseUrl}/LogisticRegression`,{text:text}).then(res=>res.data).catch(err=>err);
    },
    J48:async(text)=>{
        return axios.post(`${baseUrl}/J48`,{text:text}).then(res=>res.data).catch(err=>err);
    },
}