const myPageLayout = (() => {
    const showExperienceRequest = async (request) => {   // 👈 async 붙임
        const container = document.querySelector('.exp-request-container');
        if (!container) return;

        if (!Array.isArray(request) || request.length === 0) {
            container.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
            return;
        }

        let html = '';

        for (const req of request) {
            const fileUrl = await fetch(`/api/mypage/request-list`)
                                  .then(res => res.text());

            html += `
                <tr>
                                                    <td class="payment-3">
                                                        <p>코리아IT</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>SW 개발 백엔드 체험</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>서류 접수</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <div>
                                                            <button class="post-23 retract-triger">
                                                                <span class="ai_center d_flex jc_center us_none white-space_nowrap p_0px_3px textStyle_Body.BodyS_Bold">지원 취소</span>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
            `;
        }

        container.innerHTML = html;

        applyFilters();
    };

    return { showList };
})();

                                                <tr>
                                                    <td class="payment-3">
                                                        <p>코리아IT</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>SW 개발 백엔드 체험</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>합격</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>-</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="payment-3">
                                                        <p>코리아IT</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>SW 개발 백엔드 체험</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>불합격</p>
                                                    </td>
                                                    <td class="payment-3">
                                                        <p>환불</p>
                                                    </td>
                                                </tr>