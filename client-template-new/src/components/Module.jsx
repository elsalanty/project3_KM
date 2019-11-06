import React from 'react';

class Module extends React.Component{

render(){
        return(
            <div  class="container" style={{marginTop:"100px"}}>
               
            <div class="page-header" id="banner">
                <div class="row">
                    <div class="col-lg-8 col-md-7 col-sm-6">
                        <h1>Module</h1>
                        <p class="lead">Module content appears here</p>
                    </div>
                    <div class="col-lg-4 col-md-5 col-sm-6">
                        <div class="sponsor">
                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="bs-docs-section clearfix">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 id="type-blockquotes">Blockquotes</h2>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-lg-4">
                        <div class="bs-component">
                        <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="bs-component">
                        <blockquote class="blockquote text-center">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="bs-component">
                        <blockquote class="blockquote text-right">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Module;