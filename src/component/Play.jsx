import React, { useEffect, useState } from 'react';
import axios from "axios";

function Play({ name }) {
  const [data, setData] = useState([]);

  console.log(process.env.YOUTUBE_API)

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    iframe.allowFullscreen = true;

    const URL = 'https://www.googleapis.com/youtube/v3/search';
    const params = { key: "AIzaSyBYOdkgKbZA27TG0ffxagHe_OMmhy1vRiI", part: 'snippet', q: name }

    axios.get(URL, { params })
      .then(res => setData(res.data.items[0].id.videoId))
      .catch(error => console.log(error));
    
  }, [name]);

  return (
    <iframe
      style={styles.main}
      title={`${name} (Trailer)`}
      width='70%'
      height='70%'
      src={`https://www.youtube.com/embed/${data}`}
    />
  );
}

const styles = {
  main: {
    backgroundColor: 'black',
    zIndex: "9999",

    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    
  }
}

export default Play;