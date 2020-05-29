import React from 'react';
 /**
 * Pagination Method 
 * @extends Component
 * This is responsibe of the pagination Requirement that is used in Recent Activity
 * 
 * Pages is the total number of pages
 * @type {Number}
 * @param {Page} props 
 * 
 * Current Page that the user is on 
 * @type {Number}
 * @param {currentPage} props 
 * 
 * Next page 
 * @type {Number}
 * @param {NextPage} props 
 * 
 */

const Pagination = (props) => {
    /**
     * Number of links of pages that appear down on the pagination bar 
     * @type {Array}
     * @param {Pagelinks}  
     */
    let pageLinks = [] 
    
    for(let i = 1; i <= props.pages + 1; i++ ) {
        let active = props.currentPage == i ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}> <span class="notify-time">{i}</span></li>)              
    }
 
    return ( 
            <div className="container">
                <div className="row">
                    <ul className="pagination">
                        { props.currentPage > 1 ? <li className="waves-effect" onClick={() => props.nextPage(props.currentPage - 1)}><span class="notify-time">Prev</span></li> : ''}
                        {/* {console.log(props.currentPage)} */}
                        { props.currentPage < props.pages + 1 ? <li className="waves-effect" onClick={() => props.nextPage(props.currentPage + 1)}><span class="notify-time">Next</span></li> : ''} 
                        {/* {console.log(props.pages)} */}
                    </ul>
                </div>        
            </div>
    )
}

export default Pagination