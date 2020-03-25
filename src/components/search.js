import React from "react"

const searchStyle = {
  fontFamily: `sans-serif`,
  boxShadow: 'none',
  marginTop: '12px'
}

const searchInputStyle = {
  width: '70%',
  border: '1px solid #808080',
  borderRadius: '3px',
  paddingLeft: '5px'
}

const searchButtonStyle = {
  width: '28%',
  background: '#007acc',
  color: '#ffffff',
  border: 'none',
  borderRadius: '3px'
}

const Search = () => {
  return (
    <form method = "get" title = "Search" action="https://cse.google.com/cse/publicurl">
    <div style={searchStyle}>
      <input style={searchInputStyle} type="text" id="q" name="q" placeholder=" Search this site with Google..." alt="Search Text" maxlength="256" />{' '}
      <input type="hidden" id="cx" name="cx" value="partner-pub-3687489269179609:bjudhzzgfly" />
      <input type="submit" style={searchButtonStyle} value="Search" />
    </div>
   </form>
  )
}

export default Search