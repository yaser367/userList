import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

import "./ContactList.scss";
import usePagination from "../../hook/pagination.hook";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAuth } from "../../utils/auth";

const ContactList = () => {
  const [pageIndex, setPageIndex] = useState(10);
  const [search, setSearch] = useState("");
  const [a, setA] = useState(true);
  const auth = useAuth();
  const { loading, error, lists, hasMore } = usePagination(
    "https://randomuser.me/api/?results=",
    pageIndex
  );
  const observer = useRef();

  const lastUserRef = useCallback(
    (node) => {
      if (loading) return <div>loading</div>;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entires) => {
        if (entires[0].isIntersecting && hasMore) {
          setPageIndex((prevIndx) => prevIndx + 10);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore]
  );

  return (
    <div className="app__contactList">
      <div>
        <p className="head-text">{a ? <Skeleton /> : "loading"}</p>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search.."
        />
      </div>
      <div className="app__contactList-list">
        {lists
          .filter((users) => {
            return search.toLowerCase === ""
              ? users
              : users.name.first.toLowerCase().includes(search) ||
                  users.name.last.toLowerCase().includes(search);
          })
          .map((users) => (
            <div ref={lastUserRef} key={users.name.first}>
              <p>{users.name.first + users.name.last}</p>
              <img src={users.picture.thumbnail} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ContactList;
