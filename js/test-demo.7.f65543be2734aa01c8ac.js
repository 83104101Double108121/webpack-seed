(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{305:function(t,e,n){},326:function(t,e,n){"use strict";n.r(e);n(47),n(305);var o=n(10),a=n(123),c=n.n(a).a.create({baseURL:"https://heroku-douban-api.herokuapp.com",timeout:3e4});c.interceptors.request.use(function(t){return t.headers["Content-Type"]="application/json; charset=UTF-8",t},function(t){return Promise.reject(t)}),c.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)});var r=c;Object(o.a)(".about-title").html("Test Page"),Object(o.a)(".about-test").on("click",function(){alert("Test Page Js")});var i=Object(o.a)(".about-ajax");i.on("click",function(){i.prop("disabled",!0).css({cursor:"not-allowed"}),Object(o.a)(".movie-item").html("正在加载中......");var t,e="";(t={},r({url:"/movie/in_theaters",method:"GET",params:t})).then(function(t){t.data.subjects.forEach(function(t){e+='<a href="'.concat(t.alt,'" target="_blank">\n        <li>').concat(t.title," --- ").concat(t.genres.join(","),"</li>\n      </a>")}),Object(o.a)(".movie-item").html(e),i.prop("disabled",!1).css({cursor:"pointer"})}).catch(function(t){Object(o.a)(".movie-item").html("请求失败,请检查网络, 重新发起请求"),i.prop("disabled",!1).css({cursor:"pointer"})})})}},[[326,2,0,1]]]);