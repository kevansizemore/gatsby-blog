import React from "react"

const searchStyle = {
  fontFamily: `sans-serif`,
  boxShadow: 'none',
  marginTop: '12px'
}

const searchInputStyle = {
  width: '80%',
  border: '1px solid #808080',
  borderRadius: '3px',
  paddingLeft: '5px'
}

const searchButtonStyle = {
  width: '18%',
  fontWeight: 'bold',
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
      <input type="hidden" id="cx" name="cx" value="009563826252003440557:o77rah8y4ct" />
      <input type="submit" style={searchButtonStyle} value="Search" />
    </div>
   </form>
  )
}

export default Search