import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  const {
    s1,
    s2,
    s3,
    s4,
    s5,
    s6,
    s7,
    s8,
    s9,
    s10,
    b1,
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8,
    b9,
    b10,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    d10,
  } = props;
  const blar = b1 + b2 + b3 + b4 + b5 + b6 + b7 + b8 + b9 + b10;
  const plar = p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10;
  const dlar = d1 + d2 + d3 + d4 + d5 + d6 + d7 + d8 + d9 + d10;
  return (
    <div className="tablesContainer">
      <Link className="table" to="/table1">
        <div>1{s1 > 0 ? <sup>{s1}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table2">
        <div>2{s2 > 0 ? <sup>{s2}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table3">
        <div>3{s3 > 0 ? <sup>{s3}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table4">
        <div>4{s4 > 0 ? <sup>{s4}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table5">
        <div>5{s5 > 0 ? <sup>{s5}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table6">
        <div>6{s6 > 0 ? <sup>{s6}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table7">
        <div className="busy">7{s7 > 0 ? <sup>{s7}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table8">
        <div>8{s8 > 0 ? <sup>{s8}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table9">
        <div>9{s9 > 0 ? <sup>{s9}</sup> : null}</div>
      </Link>

      <Link className="table" to="/table10">
        <div>10{s10 > 0 ? <sup>{s10}</sup> : null}</div>
      </Link>
      <Link className="table" to="/admin/:id">
        <div>ad</div>
      </Link>
      <Link className="table " to="/burgerer">
        <div>bg{blar > 0 ? <sup className="bsup">{blar}</sup> : null}</div>
      </Link>
      <Link className="table " to="/pizzarer">
        <div>pz{plar > 0 ? <sup className="bsup">{plar}</sup> : null}</div>
      </Link>
      <Link className="table " to="/drinker">
        <div>dr{dlar > 0 ? <sup className="bsup">{dlar}</sup> : null}</div>
      </Link>
    </div>
  );
};

export default Table;
