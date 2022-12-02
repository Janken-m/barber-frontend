//import mapStyles from "./mapUtils/mapStyles";
//  https://snazzymaps.com

const GoogleMapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          width={652}
          height={493}
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=helsingborg&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        />
        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/">
          divi discount
        </a>
        <br />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".mapouter{position:relative;text-align:right;height:493px;width:652px;}",
          }}
        />
        <a href="https://www.embedgooglemap.net">google maps for my website</a>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".gmap_canvas {overflow:hidden;background:none!important;height:493px;width:652px;}",
          }}
        />
      </div>
    </div>
  );
};

export default GoogleMapComponent;