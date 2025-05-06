import React from 'react'

interface ProfileCard2Props {
  name: string;
  age: number;
  gender: string;
  address: string;
  telephoneNumber: string;
}

const ProfileCard2 = ({
  name,
  age,
  gender,
  address,
  telephoneNumber
}: ProfileCard2Props) => {
  return (
    <li>
      <ul>名前：{name}</ul>
      <ul>年齢：{age}</ul>
      <ul>性別：{gender}</ul>
      <ul>住所：{address}</ul>
      <ul>電話番号：{telephoneNumber}</ul>
    </li>
  )
}

export default ProfileCard2