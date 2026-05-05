/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Professor from './pages/Professor';
import Team from './pages/Team';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Instruments from './pages/Instruments';
import Activities from './pages/Activities';
import CYCH from './pages/CYCH';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="professor" element={<Professor />} />
          <Route path="team" element={<Team />} />
          <Route path="research" element={<Research />} />
          <Route path="publications" element={<Publications />} />
          <Route path="instruments" element={<Instruments />} />
          <Route path="activities" element={<Activities />} />
          <Route path="cych" element={<CYCH />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

