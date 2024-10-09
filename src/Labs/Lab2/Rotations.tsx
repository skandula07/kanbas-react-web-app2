import "./index.css";

export default function Rotations() {
    return (
     <div>

<h2>Rotations</h2>
<h3>Rotating a paragraph</h3>
<p className="rotate-paragraph">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

<h3>Rotating a lists</h3>
<ul className="rotate-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>


<h3>Rotating list items</h3>
<ul className="rotate-list-items">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>


<h3>Rotating an image</h3>
<img className="rotate-image"  alt="" width="400px"
     src="https://e7.pngegg.com/pngimages/422/643/png-clipart-five-nights-at-freddy-s-sister-location-freddy-fazbear-s-pizzeria-simulator-five-nights-at-freddy-s-2-five-nights-at-freddy-s-3-five-nights-at-freddy-s-3.png"/>

<h3>Rotating a table</h3>
<br/><br/>
<table className="rotate-table">
    <tr><td>Return rate</td><td>Monthly contributions</td>
        <td>Balance after 40 years</td></tr>
    <tr><td>5</td><td>250</td><td>372,141.15</td></tr>
    <tr><td>5</td><td>500</td><td>744,282.29</td></tr>
    <tr><td>5</td><td>1000</td><td>1,488,564.58</td></tr>
    <tr><td>7</td><td>250</td><td>621,379.12</td></tr>
    <tr><td>7</td><td>500</td><td>1,242,758.23</td></tr>
    <tr><td>7</td><td>1000</td><td>2,485,516.46</td></tr>
    <tr><td>10</td><td>250</td><td>1,398,651.85</td></tr>
    <tr><td>10</td><td>500</td><td>2,797,303.70</td></tr>
    <tr><td>10</td><td>1000</td><td>5,594,607.40</td></tr>
    <tr><td>13</td><td>250</td><td>3,251,260.21</td></tr>
    <tr><td>13</td><td>500</td><td>6,502,520.42</td></tr>
    <tr><td>13</td><td>1000</td><td>13,005,040.83</td></tr>
</table>





     </div>
     );
}