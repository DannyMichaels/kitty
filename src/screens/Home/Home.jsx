import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Home.css";
import { getCat } from "../../services/apiConfig";
import Button from "../../components/shared/Styled/Button";

function Home() {
  const [count, setCount] = useState(0);
  const [catData, setCatData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    document.title = `${count} cats seen!`;
  }, [count]);

  useEffect(() => {
    const getApi = async () => {
      const response = await getCat();
      setCatData(response[0]);
      setLoading(false);
      setCount((currentCount) => (currentCount += 1));
    };

    getApi();
  }, []);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendRequest = useCallback(async () => {
    // don't send again while we are sending
    if (isSending) return;
    // update state
    setIsSending(true);
    // send the actual request
    const response = await getCat();
    // once the request is sent, update state again
    setCatData(response[0]);
    if (isMounted.current)
      // only update if we are still mounted
      setIsSending(false);
  }, [isSending]); // update the callback if the state changes

  return (
    <div className="home">
      <div>
        <div>
          {loading ? (
            <div style={{ fontSize: "36px" }}>LOADING CAT...</div>
          ) : (
            catData && <img src={catData.url} alt="cat" />
          )}
        </div>
      </div>

      <Button disabled={isSending} onClick={sendRequest}>
        GET CAT
      </Button>
    </div>
  );
}

export default Home;
