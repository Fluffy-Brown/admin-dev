import{O as s,E as o}from"./vendor-B-767y0k.js";import{r as a}from"./index-A75kaW5P.js";const t=s.create({baseURL:"http://47.236.64.119:9999",timeout:15e3});t.interceptors.request.use(e=>{const r=localStorage.getItem("token");return r&&(e.headers.Authorization=`Bearer ${r}`),e},e=>Promise.reject(e));t.interceptors.response.use(e=>e.data,e=>{var r;return((r=e.response)==null?void 0:r.status)===401&&(localStorage.removeItem("token"),a.push("/login")),o.error(e.message||"Request Error"),Promise.reject(e)});export{t as s};
//# sourceMappingURL=request-C0hLSC6d.js.map
