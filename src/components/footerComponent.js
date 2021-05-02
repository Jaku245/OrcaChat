import 'antd/dist/antd.css';
import { Layout } from 'antd';

import '../App.css';

export default function Footer() {
    return (
        <Layout style={{ marginTop: 50 }}>
            <div style={{ textAlign: 'center', marginTop: 50, marginBottom: 50, fontFamily: 'Montserrat' }}>OrcaChat Design ©2021 Created by Jaimin Desai</div>
        </Layout>
    );
}