import React from 'react';

const Footer = () => {
    return (
        /* ===================== Footer Are =====================  */
        <footer class="footer p-10 bg-neutral  text-white mt-16">
            <div>
                <span class="footer-title">Services</span>
                <a href="link link-hover ">Facebook Marketing</a>
                <a href="link link-hover">Design</a>
                <a href="link link-hover">Marketing</a>
                <a href="link link-hover">Advertisement</a>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <a href="link link-hover">About us</a>
                <a href="link link-hover">Contact</a>
                <a href="link link-hover">Jobs</a>
                <a href="link link-hover">Press kit</a>
            </div>
            <div>
                <span class="footer-title">Newsletter</span>
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text  text-white">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;