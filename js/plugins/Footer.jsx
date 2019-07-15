/*
 * Copyright 2019, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const PropTypes = require('prop-types');
const { Grid, Row, Col } = require('react-bootstrap');

class Footer extends React.Component {

    static propTypes = {
        address: PropTypes.string,
        socialLinks: PropTypes.array
    };

    static defaultProps = {
        address: 'Newmont Goldcorp |Minera Peñasquito| Carretera Mazapil Cedros KM 24 Mazapil, Zacatecas C.P. 98230| T +52 842 424 2700',
        socialLinks: []
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} className="text-center">
                        {this.props.address}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="gc-social-links-container">
                        <div>
                            {this.props.socialLinks.map((link, idx) => (
                                <div key={idx} className="gc-social-link">
                                    <a
                                        href={link.href}
                                        target={link.target || '_blank'}>
                                        <img src={link.src}/>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

module.exports = {
    FooterPlugin: Footer
};
