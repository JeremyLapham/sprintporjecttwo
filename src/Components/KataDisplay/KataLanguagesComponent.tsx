import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { KataLanguage } from './KataLanguageDisplay';

interface UserProps {
  language: string;
}

export default function KataLanguagesComponent({ language }: UserProps) {
  return (
    <div>
        {KataLanguage(language)}
    </div>
  )
}

export { KataLanguagesComponent }