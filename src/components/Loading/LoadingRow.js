import React from 'react'

export default function LoadingRow() {
    return (
        <>
            <svg width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="translate(20 50)">
                    <circle cx="0" cy="0" r="8" fill="#fb2907">
                        <animateTransform attributeName="transform" type="scale" begin="-0.75s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g><g transform="translate(40 50)">
                    <circle cx="0" cy="0" r="8" fill="#fb2907">
                        <animateTransform attributeName="transform" type="scale" begin="-0.5s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g><g transform="translate(60 50)">
                    <circle cx="0" cy="0" r="8" fill="#fb5909">
                        <animateTransform attributeName="transform" type="scale" begin="-0.25s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g><g transform="translate(80 50)">
                    <circle cx="0" cy="0" r="8" fill="#fb7019">
                        <animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="2s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </g>
            </svg>
        </>
    )
}
