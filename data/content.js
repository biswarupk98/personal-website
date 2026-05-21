export const profile = {
  name: { first: "Biswarup", last: "Karmakar" },
  title: "Doctoral Researcher",
  institution: "Indian Institute of Science, Bengaluru",
  department: "Dept. of Computational & Data Sciences",
  email: "biswarupk7[AT]gmail[DOT]com",
  github: "https://github.com/biswarupk98",
  githubLabel: "github.com/biswarupk98",
  bio: `My doctoral work sits at the intersection of multilinear algebra and
    computational mathematics. I develop iterative methods and matrix-theoretic
    tools particularly under the t-product and M-product frameworks — to solve
    inverse problems for higher-order tensors and to design robust algorithms for
    low-rank completion in the presence of noise and missing data.`,
};

export const interests = [
  "Tensor decompositions",
  "Tensor generalized inverses",
  "Numerical optimisation",
  "Low-rank representations",
  "Machine learning",
  "Quaternion matrices",
];

export const publications = [
  {
    id: 5,
    title: "Nonlinear transform-induced nuclear norm for quaternion tensor completion",
    authors: "B. Karmakar and R. Behera",
    status: "review",
    statusLabel: "Preprint",
    venue: "Under review",
    arxiv: "2605.01467",
    url: "https://arxiv.org/abs/2605.01467",
    urlLabel: "arxiv.org/abs/2605.01467",
  },
  {
    id: 4,
    title: "A family of iterative methods for computing generalized inverses of quaternion matrices and its applications",
    authors: "B. Karmakar, N. Bhadala, and R. Behera",
    status: "review",
    statusLabel: "Preprint",
    venue: "Under review",
    arxiv: "2605.01464",
    url: "https://arxiv.org/abs/2605.01464",
    urlLabel: "arxiv.org/abs/2605.01464",
  },
  {
    id: 3,
    title: "Robust low-rank tensor completion based on M-product with weighted correlated total variation and sparse regularization",
    authors: "B. Karmakar and R. Behera",
    status: "review",
    statusLabel: "Under review",
    venue: "Minor revision · <em>Applied Mathematics and Computation</em>",
    arxiv: "2604.13525",
    url: "https://arxiv.org/abs/2604.13525",
    urlLabel: "arxiv.org/abs/2604.13525",
  },
  {
    id: 2,
    title: "Computation of M-QDR decomposition of tensors and applications",
    authors: "K. Panigrahy, B. Karmakar, J. K. Sahoo, R. Behera, and R. N. Mohapatra",
    status: "published",
    statusLabel: "Published",
    venue: "<em>Journal of Applied Mathematics and Computing</em>, Vol. 71 (2025), S437–S462",
    doi: "10.1007/s12190-025-02487-z",
    url: "https://doi.org/10.1007/s12190-025-02487-z",
    urlLabel: "doi:10.1007/s12190-025-02487-z",
  },
  {
    id: 1,
    title: "Efficient iterative methods for computing generalized inverse of tensors based on t-product",
    authors: "B. Karmakar and R. Behera",
    status: "published",
    statusLabel: "Published",
    venue: "<em>Computational and Applied Mathematics</em>, Vol. 44 (2025), No. 7, Paper No. 380",
    doi: "10.1007/s40314-025-03339-z",
    url: "https://doi.org/10.1007/s40314-025-03339-z",
    urlLabel: "doi:10.1007/s40314-025-03339-z",
  },
];

export const education = [
  {
    degree: "M.Tech. (Research) + Ph.D. in Computational and Data Science",
    institution: "Indian Institute of Science, Bengaluru",
    period: "Aug 2022 – May 2026",
    thesis: "Tensor Generalized Inverses and Low-Rank Representation with Applications",
    supervisor: "Dr. Ratikanta Behera",
    cgpa: "8.7 / 10",
  },
  {
    degree: "M.Sc. in Mathematics",
    institution: "Indian Institute of Technology Kanpur",
    period: "Aug 2018 – Jun 2020",
    thesis: "Sobolev Spaces and Existence of Weak Solutions for Second-order Elliptic PDE",
    supervisor: "Dr. Prosenjit Roy",
  },
  {
    degree: "B.Sc. in Mathematics",
    institution: "Serampore College, University of Calcutta",
    period: "Jul 2015 – Jun 2018",
  },
];

export const achievements = [
  "GATE Mathematics 2021 — All India Rank <strong>58</strong> (Score 683)",
  "Joint CSIR-UGC Junior Research Fellowship — AIR 125 (Jun 2019) &amp; AIR 165 (Dec 2019)",
  "Joint Admission Test for M.Sc. (JAM) — All India Rank <strong>194</strong>, 2018",
  "INSPIRE Scholarship, Dept. of Science &amp; Technology, Govt. of India (2015–2020) — awarded to top 1% students in Class XII Board Exams nationally",
];

export const skills = [
  { label: "Languages", items: ["Python", "MATLAB", "C", "C++"] },
  { label: "Libraries & frameworks", items: ["PyTorch", "TensorLy", "CUDA (cuBLAS)", "scikit-learn"] },
  { label: "Tools & systems", items: ["Linux", "LaTeX", "MS Office", "Windows"] },
  { label: "Teaching", items: ["Tensor Computations for Data Science", "Numerical Methods (IISc, 2023–24)"] },
];

