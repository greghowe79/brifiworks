import React from 'react';
import { Link } from 'react-router-dom';

const TestoTerms= () => (
  <div className='sfondo-testo'>
    <div className="div-termini">
    <div className="text-container">
            <div className="sottotitoli">
            <h2>Brifiworks Terms of Service</h2>
            <ol>
                <div className='p-terms'>
                <li>Terms</li>
                    <div className="paragrafo">
                    By accessing the website at <Link to='/'><span className='text-link'>brifiworks.com</span></Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                    </div>
                </div>
                <div className='p-terms'>
                <li>Use License</li>
                    <ul className='disc'>
                        <li>
                            <div className="paragrafo">
                            Permission is granted to temporarily download one copy of the materials (information or software) on Brifiworks' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </div>
                        </li>
                        <li>
                            <div className="paragrafo">
                                modify or copy the materials;
                            </div>
                        </li>
                        <li>
                            <div className="paragrafo">
                                use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                            </div> 
                        </li>
                        <li>
                            <div className="paragrafo">
                                attempt to decompile or reverse engineer any software contained on Brifiworks' website;
                            </div>  
                        </li>
                        <li>
                            <div className="paragrafo">
                                remove any copyright or other proprietary notations from the materials; or
                            </div>
                        </li>
                        <li>
                            <div className="paragrafo">
                                transfer the materials to another person or "mirror" the materials on any other server.
                            </div> 
                        </li>
                        <li>
                            <div className="paragrafo">
                                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Brifiworks at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                            </div>
                        </li>
                    </ul>
                    </div>
                <div className='p-terms'>
                <li>Disclaimer</li>
                <ul className='disc'>
                    <li>
                        <div className="paragrafo">
                            The materials on Brifiworks' website are provided on an 'as is' basis. Brifiworks makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </div> 
                    </li>
                    <li>
                        <div className="paragrafo">
                            Further, Brifiworks does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </div>   
                    </li>
                </ul>
                </div>
                <div className='p-terms'>
                <li>Limitations</li>
                    <div className="paragrafo">
                        In no event shall Brifiworks or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Brifiworks' website, even if Brifiworks or a Brifiworks authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                    </div>
                </div>
                <div className='p-terms'> 
                <li>Accuracy of materials</li>
                    <div className="paragrafo">
                        The materials appearing on Brifiworks' website could include technical, typographical, or photographic errors. Brifiworks does not warrant that any of the materials on its website are accurate, complete or current. Brifiworks may make changes to the materials contained on its website at any time without notice. However Brifiworks does not make any commitment to update the materials.
                    </div>
                </div>
                <div className='p-terms'>
                <li>Links</li>
                    <div className="paragrafo">
                        Brifiworks has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Brifiworks of the site. Use of any such linked website is at the user's own risk.
                    </div>
                </div>
                <div className='p-terms'>
                <li>Modifications</li>
                    <div className="paragrafo">
                        Brifiworks may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </div>
                </div>
                <div className="p-terms">
                <li>Governing Law</li>
                    <div className="paragrafo">
                        These terms and conditions are governed by and construed in accordance with the laws of Munich, Germany and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </div>
                </div>
            </ol>
        </div>
      </div> 
	</div>
  </div>
);

export default TestoTerms;