/*
 * opengraph-scraper
 * https://github.com/thebigredgeek/opengraph-scraper
 *
 * Copyright (c) 2013 Andrew E. Rhyne
 * Licensed under the MIT license.
 */
var q       = require('q'),
    jsdom   = require('jsdom');

/**
 * This function fetchs open graph data regarding a given URL
 * @param  {String} url URL string
 * @return {Object}     A promise
 */
module.exports = function(url){
    var deferral = q.defer(),
        openGraphData = [];

    jsdom.env(url,{
        done:function(error,window){
            if(error){
                deferral.reject(error); //reject for error
            }
            else{
                jsdom.jQueryify(window,'http://code.jquery.com/jquery-2.0.3.min.js',function(){
                    window.$('meta[property^=og]').each(function(index,item){
                        openGraphData.push([item.getAttribute('property'),item.getAttribute('content')]);
                    });
                });
                if(openGraphData.length < 1){
                    deferral.reject(false); //reject, for no data
                }
                else{
                    deferral.resolve(openGraphData); //resolve with data
                }
            }
        }
    });
    return deferral.promise;
};
