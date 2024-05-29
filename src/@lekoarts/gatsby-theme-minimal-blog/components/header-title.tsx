/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const HeaderTitle = () => {
  return (
    <div sx={{
      display: 'flex',        // Enables flexbox layout
      alignItems: 'center',   // Vertically centers the items in the flex container
      textDecoration: 'none', // Removes underline from all child links
      a: {                    // Targeting anchor tags specifically
        color: 'inherit',     // Inherits color from parent
        textDecoration: 'none', // Ensures no underline
        ':hover': {           // Styles for hover state
          textDecoration: 'none' // No underline on hover
        }
      }
    }}>
      <Link to="/" sx={{ display: 'flex', alignItems: 'center' }}>
        <img src="/images/logo.png" alt="logo" sx={{ width: '50px', height: 'auto', marginRight: '10px' }} />
        <span sx={{ fontSize: 3, fontWeight: 'bold' }}>Amanzi-ATS</span> {/* Adjust fontSize as needed */}
      </Link>
    </div>
  );
};

export default HeaderTitle;

